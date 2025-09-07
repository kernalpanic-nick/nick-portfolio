import { useState } from 'react';
import { Button } from '../ui';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataObj
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      className="max-w-md border rounded-2xl p-4 dark:border-gray-700" 
      onSubmit={handleSubmit}
    >
      <div className="space-y-3">
        <input
          required
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-xl px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          disabled={isSubmitting}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-xl px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          disabled={isSubmitting}
        />
        <textarea
          required
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded-xl px-3 py-2 text-sm min-h-[120px] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
        
        {submitStatus === 'success' && (
          <p className="text-sm text-green-600 dark:text-green-400">
            Message sent successfully!
          </p>
        )}
        
        {submitStatus === 'error' && (
          <p className="text-sm text-red-600 dark:text-red-400">
            Failed to send message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
