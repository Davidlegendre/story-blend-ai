const GetFetch = async (url) => {
  try {
    const data = await fetch(url);
    const json = await data.json();
    console.log(`[${data.status}] ${url} ${data.statusText} ${JSON.stringify(json)}`);
    return json;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const PostFetch = async (url, body) => {
  try {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    console.log(`[${data.status}] ${url} ${data.statusText} ${await data.text()}`);
    return data.ok;
  } catch (error) {
    console.error(error);
  }
};

export { GetFetch as G, PostFetch as P };
