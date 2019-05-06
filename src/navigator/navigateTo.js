import {Actions} from 'react-native-router-flux';

export function navigateTo(screen, method = 'push') {
    switch(method.toLowerCase()){
        case 'replace':
            Actions.replace(screen);
            break;
        case 'reset':
            Actions.reset(screen);
            break;
        default:
            Actions.push(screen);
            break;
    }
}

export function refreshScreen(props) {
    Actions.refresh(props)
}