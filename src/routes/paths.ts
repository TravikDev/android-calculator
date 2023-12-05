const ROOTS = {
    AUTH: '/auth',
    BLOG: '/blog',
    GARDEN: '/garden',
    DASHBOARD: '/dashboard',
    CALCULATOR: '/calculator',
};

// ----------------------------------------------------------------------


export const paths = {
    home: '/',
    blog: {
        blog: `${ROOTS.BLOG}`,
        new: `${ROOTS.BLOG}/new`,
        details: (id: number) => `${ROOTS.BLOG}/${id}`,
        edit: (id: number) => `${ROOTS.BLOG}/${id}/edit`,
    },
    gardens: {
        root: `${ROOTS.GARDEN}`,
        new: `${ROOTS.GARDEN}/new`,
        details: (id: number) => `${ROOTS.GARDEN}/${id}`,
        edit: (id: number) => `${ROOTS.GARDEN}/${id}/edit`,
    },
    dashboard: {
        root: `${ROOTS.DASHBOARD}`,
    },
    calculator: {
        root: `${ROOTS.CALCULATOR}`,
        lite: {
            root: `${ROOTS.CALCULATOR}/lite`,
            solutions: {
                root: `${ROOTS.CALCULATOR}/lite/solutions`,
                new: `${ROOTS.CALCULATOR}/lite/solutions/new`,
                details: (id: number) => `${ROOTS.CALCULATOR}/lite/solutions/${id}`,
                edit: (id: number) => `${ROOTS.CALCULATOR}/lite/soltuions/${id}/edit`
            },
            nutrients: {
                root: `${ROOTS.CALCULATOR}/lite/nutrients`,
                new: `${ROOTS.CALCULATOR}/lite/nutrients/new`,
                details: (id: number) => `${ROOTS.CALCULATOR}/lite/nutrients/${id}`,
                edit: (id: number) => `${ROOTS.CALCULATOR}/lite/nutrients/${id}/edit`
            }
        },
        pro: {
            root: `${ROOTS.CALCULATOR}/pro`,
            profiles: {
                root: `${ROOTS.CALCULATOR}/pro/solutions`,
                new: `${ROOTS.CALCULATOR}/pro/solutions/new`,
                details: (id: number) => `${ROOTS.CALCULATOR}/pro/solutions/${id}`,
                edit: (id: number) => `${ROOTS.CALCULATOR}/pro/soltuions/${id}/edit`
            },
            nutrients: {
                root: `${ROOTS.CALCULATOR}/pro/nutrients`,
                new: `${ROOTS.CALCULATOR}/pro/nutrients/new`,
                details: (id: number) => `${ROOTS.CALCULATOR}/pro/nutrients/${id}`,
                edit: (id: number) => `${ROOTS.CALCULATOR}/pro/nutrients/${id}/edit`
            }
        }
    },
}