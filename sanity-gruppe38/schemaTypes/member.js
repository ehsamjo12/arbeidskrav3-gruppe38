export default {
    name: 'member',
    title: 'Gruppemedlem',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Navn',
        type: 'string'
      },
      {
        name: 'email',
        title: 'E-post',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Bilde',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'bio',
        title: 'Biografi',
        type: 'text'
      },
      {
        name: 'interests',
        title: 'Interesser',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'logs',
        title: 'Arbeidslogg',
        type: 'array',
        of: [{ type: 'logEntry' }]
      }
    ]
  }
  