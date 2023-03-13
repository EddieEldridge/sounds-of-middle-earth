import { notification } from 'antd';

export function handleErrorNotification(err: string, description: string, duration=4, key?: string) {
    notification.error({
        key,
        duration,
        message: 'Error',
        description
    });
}

export function handleWarningNotification(description: string, duration=4, key?: string) {
    notification.warning({
        key,
        duration,
        message: 'Warning',
        description
    });
}

export function handleSuccessNotification(description: string, duration=30, key?: string) {
    notification.success({
        key,
        message: 'Success',
        description,
        duration
    });
}

export function handleInfoNotification(message: string, description: string, icon?: React.ReactNode, key?: string) {
    notification.info({
        key,
        message,
        description,
        icon
    });
}

export function handleCloseNotification(key: string) {
    notification.close(key);
}