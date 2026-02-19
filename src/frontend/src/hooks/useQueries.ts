import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Contact } from '../backend';

export function useGetAllContacts() {
  const { actor, isFetching } = useActor();

  return useQuery<Contact[]>({
    queryKey: ['contacts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContacts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetContact(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Contact>({
    queryKey: ['contact', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getContact(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

export function useGetContactsByService(service: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Contact[]>({
    queryKey: ['contacts', 'service', service],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactsByService(service);
    },
    enabled: !!actor && !isFetching && !!service,
  });
}
