module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Atomic design level?',
        choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages']
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?'
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory(Optional)',
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { category, component_name, dir } = answers
        const parentPath=`${category}${ dir ? `/${dir}` : `` }`
        const path = `${parentPath}/${component_name}`
        const absPath = `src/${path}`
        return { ...answers, path, parentPath, absPath, category }
      })
  }
}
