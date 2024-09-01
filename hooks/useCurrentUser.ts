import { getUserById } from '@/actions/users';
import { useUser } from '@clerk/nextjs';
import { User } from '@prisma/client';
import { useEffect, useState } from 'react';

export const useCurrentUser = () => {
  const { user } = useUser();

  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.id) {
        try {
          const data = await getUserById({ clerkUserId: user.id });
          if (data.user) {
            setUserData(data?.user);
          }
        } catch (err) {
          if (err instanceof Error) {
            setError(err);
          } else {
            setError(new Error('An unknown error occurred'));
          }
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  return { userData, loading, error };
};
