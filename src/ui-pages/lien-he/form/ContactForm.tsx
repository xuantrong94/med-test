'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from './contact.schema';
import { submitContactForm, type ContactApiResponse } from './api';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<ContactApiResponse | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    mode: 'onBlur',
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const result = await submitContactForm(data);
      setSubmitResult(result);

      if (result.success) {
        reset(); // Reset form on success
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'An unexpected error occurred',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      {/* Success Message */}
      {submitResult?.success && (
        <div
          data-testid='success-message'
          style={{
            padding: '10px',
            backgroundColor: '#d4edda',
            color: '#155724',
            marginBottom: '20px',
            borderRadius: '4px',
          }}
        >
          {submitResult.message}
        </div>
      )}

      {/* Error Message */}
      {submitResult && !submitResult.success && (
        <div
          data-testid='error-message'
          style={{
            padding: '10px',
            backgroundColor: '#f8d7da',
            color: '#721c24',
            marginBottom: '20px',
            borderRadius: '4px',
          }}
        >
          {submitResult.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            aria-label='name'
            disabled={isSubmitting}
            {...register('name')}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            aria-label='email'
            disabled={isSubmitting}
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input
            id='phone'
            aria-label='phone'
            disabled={isSubmitting}
            {...register('phone')}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor='type'>Type</label>
          <select
            id='type'
            disabled={isSubmitting}
            {...register('type')}
          >
            <option value='feedback'>Feedback</option>
            <option value='inquiry'>Inquiry</option>
            <option value='support'>Support</option>
          </select>
          {errors.type && <p>{errors.type.message}</p>}
        </div>
        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            aria-label='message'
            disabled={isSubmitting}
            {...register('message')}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <div>
          <button
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
