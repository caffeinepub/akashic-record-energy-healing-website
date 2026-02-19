import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  preferredService: string;
  message: string;
}

export function useContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }

      const id = await actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.preferredService,
        data.message
      );

      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I\'ll be in touch soon.',
      });
    },
    onError: (error) => {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message', {
        description: 'Please try again or contact us directly via email.',
      });
    },
  });

  return {
    submitForm: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
