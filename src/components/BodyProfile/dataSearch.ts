export interface Searching {
  id: number;
  category: string;
  title: string;
  link: string;
}

const searchData: Searching[] = [
  {
    id: 1,
    category: "Security",
    title: "Change your password",
    link: "/security",
  },
  {
    id: 2,
    category: "Personal Information",
    title: "Manage your addresses",
    link: "/PersonalInformation",
  },
  {
    id: 3,
    category: "/Payments",
    title: "Your payments",
    link: "/payments",
  },
];

export default searchData;
