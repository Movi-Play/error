const users = [
    {
        id: 'admin_001',
        name: 'Super Admin',
        email: '123321',
        role: 'admin',
        status: 'active'
    },
    {
        id: 'admin_002',
        name: 'DJBUDA',
        email: 'DJBUDA@admin.com',
        role: 'admin',
        status: 'banned'
    },
    {
        id: 'admin_003',
        name: 'Arely',
        email: 'Arely@admin.com',
        role: 'admin',
        status: 'active'
    },
    {
        id: 'admin_004',
        name: 'Kakaroto',
        email: 'Kakaroto@admin.com',
        role: 'admin',
        status: 'active'
    },
    {
        id: 'donor_001',
        name: 'Carlos',
        email: 'carlos@donador.com',
        role: 'donor',
        status: 'active',
        plan: {
            type: 'monthly',
            endDate: '2025-08-10' // Fecha futura para probar
        }
    },
    {
        id: 'donor_002',
        name: 'María Contribuyente',
        email: 'maria@donador.com',
        role: 'donor',
        status: 'active',
        plan: {
            type: 'yearly',
            endDate: '2025-01-01'
        }
    },
    {
        id: 'donor_003',
        name: 'Juan Vitalicio',
        email: 'juan@donador.com',
        role: 'donor',
        status: 'active',
        plan: {
            type: 'lifetime',
            endDate: null // Plan vitalicio no expira
        }
    },
    {
        id: 'donor_004',
        name: 'Usuario Expirado',
        email: 'expirado@donador.com',
        role: 'donor',
        status: 'active',
        plan: {
            type: 'monthly',
            endDate: '2024-05-18' // Ya expiró
        }
    },
    {
        id: 'donor_005',
        name: 'Usuario Baneado',
        email: 'baneado@app.com',
        role: 'donor',
        status: 'banned'
    }
];
