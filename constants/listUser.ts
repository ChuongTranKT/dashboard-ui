export type UserType = {
  id: number
  name: string
  position: string
  avatar: string
}

export const LIST_USER: UserType[] = [
  { id: 1, name: 'John Doe', position: 'Developer', avatar: '/images/img_avatar_2.svg' },
  { id: 2, name: 'Jane Smith', position: 'Designer', avatar: '/images/img_avatar_2.svg' },
  { id: 3, name: 'Mike Johnson', position: 'Manager', avatar: '/images/img_avatar_2.svg' },
  { id: 4, name: 'Sarah Williams', position: 'Tester', avatar: '/images/img_avatar_2.svg' },
  { id: 5, name: 'David Brown', position: 'Analyst', avatar: '/images/img_avatar_2.svg' },
  { id: 6, name: 'Emily Davis', position: 'Product Owner', avatar: '/images/img_avatar_2.svg' },
]
