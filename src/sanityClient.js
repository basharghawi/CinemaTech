import { createClient } from "@sanity/client";

const client = createClient({
  projectId: 'efxur5js',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})

export default client;