interface AppHeaderProps {
  headerTitle: string;
}

// typeAppHeaderProps = {headerTitle: string};

// 구조분해 할당 ({hearderTitle}: AppHeaderProps)
// const AppHeader = (props: AppHeaderProps) => {
//   return <h1>{props.headerTitle}</h1>

// }

const AppHeader = ({ headerTitle }: AppHeaderProps) => {
  return <h1>{headerTitle}</h1>;
};

export default AppHeader;
