import { ContactFormData } from './contact.schema';

// Simulate API response
export interface ContactApiResponse {
  success: boolean;
  message: string;
  id?: string;
}

// Simulate API call with delay
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactApiResponse> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate API call
  try {
    // In real app, this would be a fetch call to your backend
    console.log('Sending contact form data:', data);

    // Simulate successful response
    return {
      success: true,
      message: 'Contact form submitted successfully',
      id: `contact_${Date.now()}`,
    };
  } catch (error) {
    // Simulate error response
    return {
      success: false,
      message: 'Failed to submit contact form',
    };
  }
}

// Alternative: Real API call implementation
export async function submitContactFormReal(
  data: ContactFormData
): Promise<ContactApiResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'Failed to submit contact form',
    };
  }
}
