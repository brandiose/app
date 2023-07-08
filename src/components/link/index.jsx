import {Link as RLink }  from 'react-router-dom'; 

const Link = ({ route, newWindow, children, ...props }) => {
  const isExternal = route && route.indexOf('http') === 0;
  return (newWindow 
    ? <a href={`${isExternal ? route : ProcessingInstruction.env.PUBLIC_URL}/${route || ''}`} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
    : isExternal 
    ? <a href={route} className="App-link" {...props}>{children}</a>
    : <RLink to={`${process.env.PUBLIC_URL}/${route || ''}`} className="App-link" {...props}>{children}</RLink>
  ); 
};

export default Link;