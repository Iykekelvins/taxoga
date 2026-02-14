'use client';

import { useState, useEffect } from 'react';

//  Lightweight fetch hook for this assessment.
//  - For production, I'd typically use React Query / RTK Query for:
// - Automatic caching
// - Background refetching
// - Optimistic updates

export function useFetch<T>(url: string) {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) throw new Error(`Error: ${res.status}`);
				return res.json();
			})
			.then((data) => {
				setData(data);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, [url]);

	return { data, isLoading, error };
}
