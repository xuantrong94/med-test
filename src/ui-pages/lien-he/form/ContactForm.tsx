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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-12 gap-5'
      >
        <div className='col-span-12 flex flex-col gap-y-1 lg:col-span-6'>
          <label
            htmlFor='name'
            className='font-semibold'
          >
            Họ và tên
          </label>
          <input
            id='name'
            aria-label='name'
            disabled={isSubmitting}
            {...register('name')}
            className='h-10 rounded-md border border-gray-300 px-3'
          />
          {errors.name && (
            <p className='text-error text-sm'>* {errors.name.message}</p>
          )}
        </div>
        <div className='col-span-12 flex flex-col gap-y-1 lg:col-span-6'>
          <label
            htmlFor='email'
            className='font-semibold'
          >
            Địa chỉ Email
          </label>
          <input
            id='email'
            aria-label='email'
            disabled={isSubmitting}
            {...register('email')}
            className='h-10 rounded-md border border-gray-300 px-3'
          />
          {errors.email && (
            <p className='text-error text-sm'>* {errors.email.message}</p>
          )}
        </div>
        <div className='col-span-12 flex flex-col gap-y-1 lg:col-span-6'>
          <label
            htmlFor='phone'
            className='font-semibold'
          >
            Số điện thoại
          </label>
          <input
            id='phone'
            aria-label='phone'
            disabled={isSubmitting}
            {...register('phone')}
            className='h-10 rounded-md border border-gray-300 px-3'
          />
          {errors.phone && (
            <p className='text-error text-sm'>* {errors.phone.message}</p>
          )}
        </div>
        <div className='col-span-12 flex flex-col gap-y-1 lg:col-span-6'>
          <label
            htmlFor='type'
            className='font-semibold'
          >
            Vấn đề của bạn
          </label>
          <select
            id='type'
            disabled={isSubmitting}
            {...register('type')}
            className='h-10 rounded-md border border-gray-300 px-3'
          >
            <option value='feedback'>Vấn đề chuyên môn</option>
            <option value='inquiry'>Vấn đề kỹ thuật</option>
            <option value='support'>Vấn đề khác</option>
          </select>
          {errors.type && <p>{errors.type.message}</p>}
        </div>
        <div className='col-span-12 flex flex-col gap-y-1'>
          <label
            htmlFor='message'
            className='font-semibold'
          >
            Nhập nội dung cần trợ giúp
          </label>
          <textarea
            id='message'
            aria-label='message'
            disabled={isSubmitting}
            {...register('message')}
            className='h-24 rounded-md border border-gray-300 p-2'
          />
          {errors.message && (
            <p className='text-error text-sm'>* {errors.message.message}</p>
          )}
        </div>
        <div className='col-span-12 flex justify-end'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-primary flex rounded px-4 py-2 text-white md:px-6 md:py-3'
          >
            {isSubmitting ? 'Đang gửi...' : 'Gửi hỗ trợ'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
