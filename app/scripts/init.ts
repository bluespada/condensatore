import client from '@/lib/db';
import { hash } from 'bcrypt';

const create_users = async () => {
    const username = process.env.CONDENSATORE_USER || "admin@admin.com";
    const password = process.env.CONDENSATORE_PASS || "admin123";
    const hashed = await hash(password, 12);
    await client.auth.create({
        data: {
            email: username,
            password: hashed,
            users: {
                create: {
                    name: "Superadmin",
                    role: ["base.superadmin", "base.admin", "base.user"]
                }
            }
        }
    });
    console.info("Done creating user");
};

(async () => {
    await create_users();
    process.exit(-1);
})();

