import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Vui lòng nhập tên hợp lệ'),
  email: z.email('Vui lòng nhập email hợp lệ'),
  phone: z
    .string()
    .regex(/^(0|\+84)[35789]\d{8}$/, 'Vui lòng nhập số điện thoại hợp lệ'),
  type: z.enum(['feedback', 'inquiry', 'support'], {
    message: 'Vui lòng chọn loại liên hệ',
  }),
  message: z.string().min(10, 'Vui lòng nhập tin nhắn hợp lệ'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
