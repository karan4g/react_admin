import * as icons from 'react-bootstrap-icons';

export const CustomIcon = ({ iconName, ...props }) => {
    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...props} />;
  }

  export function getData(label) {
    if (window && window.localStorage){
    const data = window && window.localStorage.getItem(label);
    return data
    }
}

export function setData(label, data) {
    if (window && window.localStorage)
        localStorage.setItem(label, JSON.stringify(data));
}