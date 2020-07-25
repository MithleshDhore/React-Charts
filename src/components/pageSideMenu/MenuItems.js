import React from 'react';
import appConfig from '../../appConfig';

import {
    PieChartOutlined,
    FileDoneOutlined,
    DatabaseOutlined,
} from '@ant-design/icons';

export const MenuItems = [
    {
        key: 'dashboard',
        route: appConfig.routes.dashboard,
        label: 'SIDEBAR.HOME',
        icon: <PieChartOutlined />,
    },
    {
        key: 'reports',
        route: appConfig.routes.reports,
        label: 'SIDEBAR.REPORTS',
        icon: <FileDoneOutlined />,
    },
    {
        key: 'summary',
        route: appConfig.routes.summary,
        label: 'SIDEBAR.SUMMARY',
        icon: <DatabaseOutlined />,
    },
];