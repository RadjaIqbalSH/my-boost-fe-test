export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api${url}`,
    options
  );

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(
      `Fetch error: ${res.status} ${res.statusText} - ${errorBody}`
    );
  }

  return res.json() as Promise<T>;
}
