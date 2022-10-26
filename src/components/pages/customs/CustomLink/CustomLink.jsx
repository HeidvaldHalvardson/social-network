import {Link, useMatch} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={match ? `${props.classAll} ${props.classActive}` : props.classAll}
    >
      {children}
    </Link>
  )
}


export default CustomLink;
