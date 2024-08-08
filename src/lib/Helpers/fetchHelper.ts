export const GetFetch = async (url: string) => {
  try {
    const data = await fetch(url);
    const json = await data.json();
    console.log(`[${data.status}] ${url.split("/").pop()} ${data.statusText}`)
    return json;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const PostFetch = async (url: string, body: any) => {
  try {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(`[${data.status}] ${url.split("/").pop()} ${data.statusText}`)
    return data.ok;
  } catch (error) {
    console.error(error);
  }
};
