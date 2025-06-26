interface Playlist {
  id: number
  title: string
  description: string
  tagIds: number[]
}

export const usePlaylistsStore = defineStore('playlists', () => {
  const playlists = ref<Playlist[]>([
    {
      id: 1,
      title: 'Settings',
      description:
      'Master VS Code settings to create your perfect coding environment.',
      tagIds: [14, 1, 3],
    },
    {
      id: 2,
      title: 'Keyboard Shortcuts',
      description:
      'Boost your productivity with essential VS Code shortcuts and keybindings.',
      tagIds: [15, 13, 3],
    },
    {
      id: 3,
      title: 'Extensions',
      description:
      'Discover must-have VS Code extensions for modern development.',
      tagIds: [16, 3, 1],
    },
    {
      id: 4,
      title: 'Git Mastery',
      description:
      'Learn advanced Git operations and collaboration directly in VS Code.',
      tagIds: [5, 6, 4],
    },
    {
      id: 5,
      title: 'Debugging Techniques',
      description:
      'Master debugging tools and techniques in VS Code for various languages.',
      tagIds: [7, 3, 1],
    },
    {
      id: 6,
      title: 'Web Development',
      description:
        'Set up the ultimate web development environment in VS Code.',
      tagIds: [9, 3, 1],
    },
    {
      id: 7,
      title: 'Python Development',
      description: 'Configure VS Code for professional Python development.',
      tagIds: [10, 3, 1],
    },
    {
      id: 8,
      title: 'React Development',
      description:
        'Optimize VS Code for React and modern JavaScript development.',
      tagIds: [11, 9, 3],
    },
    {
      id: 9,
      title: 'Remote Development',
      description:
        'Learn to use VS Code for remote development and cloud environments.',
      tagIds: [12, 3, 4],
    },
    {
      id: 10,
      title: 'Testing Tools',
      description: 'Set up and use testing frameworks and tools in VS Code.',
      tagIds: [8, 3, 1],
    },
  ])

  return {
    playlists,
  }
})
