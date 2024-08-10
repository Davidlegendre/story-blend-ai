export const GetFetch = async <T> (url: string): Promise<T | null> => {
  try {
    const data = await fetch(url);
    const json = await data.json();
    console.log(`[${data.status}] ${url.substring(url.indexOf("api"))} ${data.statusText}`)
    return json;
  } catch (error) {
    console.error(`[Error] ${url.substring(url.indexOf("api"))} ${error.message}`)
    return null;
  }
};

export const PostFetch = async (url: string, body?: any) => {
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
    console.error(`[Error] ${url.substring(url.indexOf("api"))} ${error.message}`)
    return false
  }
};

export const PostFetchJson = async (url: string, body?: any) => {
  try {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await data.json()
    console.log(`[${data.status}] ${url.split("/").pop()} ${data.statusText}`)
    return json;
  } catch (error) {
    console.error(`[Error] ${url.substring(url.indexOf("api"))} ${error.message}`)
    return null
  }
};