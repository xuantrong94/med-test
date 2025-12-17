import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm';
import * as api from './api';

// Mock the API module
jest.mock('./api');
const mockSubmitContactForm = jest.mocked(api.submitContactForm);

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Render', () => {
    it('should render all form fields', () => {
      render(<ContactForm />);

      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/type/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /submit/i })
      ).toBeInTheDocument();
    });

    it('should render type select with correct options', () => {
      render(<ContactForm />);

      const typeSelect = screen.getByLabelText(/type/i);
      expect(typeSelect).toBeInTheDocument();

      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(3);
      expect(options[0]).toHaveValue('feedback');
      expect(options[1]).toHaveValue('inquiry');
      expect(options[2]).toHaveValue('support');
    });
  });

  describe('Validation', () => {
    it('should show error for invalid name (less than 2 characters)', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/name/i);

      await user.type(nameInput, 'A');
      await user.tab(); // Trigger onBlur

      await waitFor(() => {
        expect(
          screen.getByText('Vui lòng nhập tên hợp lệ')
        ).toBeInTheDocument();
      });
    });

    it('should show error for invalid email', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const emailInput = screen.getByLabelText(/email/i);

      await user.type(emailInput, 'invalid-email');
      await user.tab(); // Trigger onBlur

      await waitFor(() => {
        expect(
          screen.getByText('Vui lòng nhập email hợp lệ')
        ).toBeInTheDocument();
      });
    });

    it('should show error for invalid phone number', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const phoneInput = screen.getByLabelText(/phone/i);

      await user.type(phoneInput, '123456789');
      await user.tab(); // Trigger onBlur

      await waitFor(() => {
        expect(
          screen.getByText('Vui lòng nhập số điện thoại hợp lệ')
        ).toBeInTheDocument();
      });
    });

    it('should accept valid Vietnamese phone numbers', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const phoneInput = screen.getByLabelText(/phone/i);

      // Test with 0 prefix
      await user.clear(phoneInput);
      await user.type(phoneInput, '0987654321');
      await user.tab();

      await waitFor(() => {
        expect(
          screen.queryByText('Vui lòng nhập số điện thoại hợp lệ')
        ).not.toBeInTheDocument();
      });

      // Test with +84 prefix
      await user.clear(phoneInput);
      await user.type(phoneInput, '+84987654321');
      await user.tab();

      await waitFor(() => {
        expect(
          screen.queryByText('Vui lòng nhập số điện thoại hợp lệ')
        ).not.toBeInTheDocument();
      });
    });

    it('should show error for message less than 10 characters', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const messageInput = screen.getByLabelText(/message/i);

      await user.type(messageInput, 'Short msg');
      await user.tab(); // Trigger onBlur

      await waitFor(() => {
        expect(
          screen.getByText('Vui lòng nhập tin nhắn hợp lệ')
        ).toBeInTheDocument();
      });
    });
  });

  describe('Form Submission', () => {
    it('should submit form with valid data and show success message', async () => {
      // Mock successful API response
      mockSubmitContactForm.mockResolvedValue({
        success: true,
        message: 'Contact form submitted successfully',
        id: 'contact_123',
      });

      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill out the form with valid data
      await user.type(screen.getByLabelText(/name/i), 'Nguyễn Văn A');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/phone/i), '0987654321');
      await user.selectOptions(screen.getByLabelText(/type/i), 'feedback');
      await user.type(
        screen.getByLabelText(/message/i),
        'This is a test message that is longer than 10 characters'
      );

      // Submit the form
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // Wait for API call and success message
      await waitFor(() => {
        expect(mockSubmitContactForm).toHaveBeenCalledWith({
          name: 'Nguyễn Văn A',
          email: 'test@example.com',
          phone: '0987654321',
          type: 'feedback',
          message: 'This is a test message that is longer than 10 characters',
        });
      });

      await waitFor(() => {
        expect(screen.getByTestId('success-message')).toBeInTheDocument();
        expect(
          screen.getByText('Contact form submitted successfully')
        ).toBeInTheDocument();
      });

      // Form should be reset after successful submission
      expect(screen.getByLabelText(/name/i)).toHaveValue('');
    });

    it('should not submit form with invalid data', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill out the form with invalid data
      await user.type(screen.getByLabelText(/name/i), 'A'); // Too short
      await user.type(screen.getByLabelText(/email/i), 'invalid-email');
      await user.type(screen.getByLabelText(/phone/i), '123');
      await user.type(screen.getByLabelText(/message/i), 'Short');

      // Submit the form
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // API should not be called with invalid data
      expect(mockSubmitContactForm).not.toHaveBeenCalled();

      // Check that error messages are displayed
      await waitFor(() => {
        expect(
          screen.getByText('Vui lòng nhập tên hợp lệ')
        ).toBeInTheDocument();
        expect(
          screen.getByText('Vui lòng nhập email hợp lệ')
        ).toBeInTheDocument();
        expect(
          screen.getByText('Vui lòng nhập số điện thoại hợp lệ')
        ).toBeInTheDocument();
        expect(
          screen.getByText('Vui lòng nhập tin nhắn hợp lệ')
        ).toBeInTheDocument();
      });
    });

    it('should handle API errors gracefully', async () => {
      // Mock API error response
      mockSubmitContactForm.mockResolvedValue({
        success: false,
        message: 'Failed to submit contact form',
      });

      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill out valid form data
      await user.type(screen.getByLabelText(/name/i), 'Nguyễn Văn A');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/phone/i), '0987654321');
      await user.selectOptions(screen.getByLabelText(/type/i), 'feedback');
      await user.type(
        screen.getByLabelText(/message/i),
        'This is a test message that is longer than 10 characters'
      );

      // Submit the form
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // Wait for error message
      await waitFor(() => {
        expect(screen.getByTestId('error-message')).toBeInTheDocument();
        expect(
          screen.getByText('Failed to submit contact form')
        ).toBeInTheDocument();
      });

      // Form should not be reset on error
      expect(screen.getByLabelText(/name/i)).toHaveValue('Nguyễn Văn A');
    });

    it('should handle network errors', async () => {
      // Mock network error
      mockSubmitContactForm.mockRejectedValue(new Error('Network error'));

      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill out valid form data
      await user.type(screen.getByLabelText(/name/i), 'Nguyễn Văn A');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/phone/i), '0987654321');
      await user.selectOptions(screen.getByLabelText(/type/i), 'feedback');
      await user.type(
        screen.getByLabelText(/message/i),
        'This is a test message that is longer than 10 characters'
      );

      // Submit the form
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // Wait for error message
      await waitFor(() => {
        expect(screen.getByTestId('error-message')).toBeInTheDocument();
        expect(
          screen.getByText('An unexpected error occurred')
        ).toBeInTheDocument();
      });
    });
  });

  describe('User Interactions', () => {
    it('should clear error messages when user corrects input', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const nameInput = screen.getByLabelText(/name/i);

      // First, trigger error
      await user.type(nameInput, 'A');
      await user.tab();

      await waitFor(() => {
        expect(
          screen.getByText('Vui lòng nhập tên hợp lệ')
        ).toBeInTheDocument();
      });

      // Then fix the input
      await user.clear(nameInput);
      await user.type(nameInput, 'Valid Name');
      await user.tab();

      await waitFor(() => {
        expect(
          screen.queryByText('Vui lòng nhập tên hợp lệ')
        ).not.toBeInTheDocument();
      });
    });

    it('should validate on blur for all fields', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Test each field triggers validation on blur
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const phoneInput = screen.getByLabelText(/phone/i);
      const messageInput = screen.getByLabelText(/message/i);

      // Fill invalid data and blur each field
      await user.type(nameInput, 'A');
      await user.tab();

      await user.type(emailInput, 'invalid');
      await user.tab();

      await user.type(phoneInput, '123');
      await user.tab();

      await user.type(messageInput, 'Short');
      await user.tab();

      // All error messages should appear
      await waitFor(() => {
        expect(
          screen.getByText('Vui lòng nhập tên hợp lệ')
        ).toBeInTheDocument();
        expect(
          screen.getByText('Vui lòng nhập email hợp lệ')
        ).toBeInTheDocument();
        expect(
          screen.getByText('Vui lòng nhập số điện thoại hợp lệ')
        ).toBeInTheDocument();
        expect(
          screen.getByText('Vui lòng nhập tin nhắn hợp lệ')
        ).toBeInTheDocument();
      });
    });

    it('should handle type selection changes', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const typeSelect = screen.getByLabelText(/type/i);

      // Change selection
      await user.selectOptions(typeSelect, 'inquiry');
      expect(typeSelect).toHaveValue('inquiry');

      await user.selectOptions(typeSelect, 'support');
      expect(typeSelect).toHaveValue('support');

      await user.selectOptions(typeSelect, 'feedback');
      expect(typeSelect).toHaveValue('feedback');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty form submission', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Submit empty form
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // Should not call API
      expect(mockSubmitContactForm).not.toHaveBeenCalled();
    });

    it('should handle whitespace in inputs and show validation errors', async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill form with data that has leading/trailing spaces - this should fail validation
      await user.type(screen.getByLabelText(/name/i), '  A  '); // Too short after trimming
      await user.type(screen.getByLabelText(/email/i), '  invalid-email  '); // Invalid email
      await user.type(screen.getByLabelText(/phone/i), '  123  '); // Invalid phone
      await user.selectOptions(screen.getByLabelText(/type/i), 'feedback');
      await user.type(screen.getByLabelText(/message/i), '  Short  '); // Too short

      await user.click(screen.getByRole('button', { name: /submit/i }));

      // Should not submit due to validation errors
      expect(mockSubmitContactForm).not.toHaveBeenCalled();
    });

    it('should disable form inputs while submitting', async () => {
      // Mock slow API response
      mockSubmitContactForm.mockImplementation(
        () =>
          new Promise(resolve =>
            setTimeout(
              () =>
                resolve({
                  success: true,
                  message: 'Success',
                }),
              1000
            )
          )
      );

      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill valid form data
      await user.type(screen.getByLabelText(/name/i), 'Nguyễn Văn A');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/phone/i), '0987654321');
      await user.selectOptions(screen.getByLabelText(/type/i), 'feedback');
      await user.type(
        screen.getByLabelText(/message/i),
        'This is a test message that is longer than 10 characters'
      );

      // Submit the form
      await user.click(screen.getByRole('button', { name: /submit/i }));

      // Check that all inputs are disabled during submission
      expect(screen.getByLabelText(/name/i)).toBeDisabled();
      expect(screen.getByLabelText(/email/i)).toBeDisabled();
      expect(screen.getByLabelText(/phone/i)).toBeDisabled();
      expect(screen.getByLabelText(/type/i)).toBeDisabled();
      expect(screen.getByLabelText(/message/i)).toBeDisabled();
      expect(
        screen.getByRole('button', { name: /submitting/i })
      ).toBeDisabled();
    });
  });
});
