const key = '30379570-4bd802e6747235a0c8da8a029';

export function FetchImages(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`no image for ${name}`));
    })
    .then(response => response.hits);
}
