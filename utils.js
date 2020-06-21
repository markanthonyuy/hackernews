const baseUrl = 'https://hacker-news.firebaseio.com/v0/'

const getUserData = async (id) => {
  const res = await fetch(`${baseUrl}user/${id}.json`)
  const data = await res.json()
  console.log(data)
}

export { getUserData, baseUrl }
