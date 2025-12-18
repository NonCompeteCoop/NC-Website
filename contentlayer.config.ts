import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: false },
    date: { type: 'date', required: false },
    description: { type: 'string', required: false },
    image: { type: 'string', required: false },
  },
}))

export default makeSource({
  contentDirPath: '.',
  documentTypes: [Page],
})
