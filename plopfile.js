const ComponentType = {
  ATOMS: 'atoms',
  MOLCULES: 'molecules'
}

const ComponentFolder = {
  [ComponentType.ATOMS]: 'atoms',
  [ComponentType.MOLCULES]: 'molecules'
}

const StoryPath = {
  [ComponentType.ATOMS]: 'Atoms',
  [ComponentType.MOLCULES]: 'Molecules'
}

export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create UI component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name'
      },
      {
        type: 'list',
        choices: Object.values(ComponentType),
        name: 'ComponentType',
        message: 'Enter component type'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/ui/{{ComponentFolder ComponentType}}/{{name}}',
        base: 'plop-templates/component',
        templateFiles: 'plop-templates/component/*.hbs'
      }
    ]
  })

  plop.setHelper('ComponentFolder', (ComponentType) => ComponentFolder[ComponentType])
  plop.setHelper('StoryPath', (ComponentType) => StoryPath[ComponentType])
}
