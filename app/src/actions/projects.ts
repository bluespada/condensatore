"use server";
import client from '@/lib/db';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export async function ActionCreateProjects(formData: FormData) {
    const session = await auth();
    console.info(formData);
    await client.projects.create({
        data: {
            name: formData.get("name") as string,
            user: {
                connect: {
                    ID: Number.parseInt(session.user.id, 0)
                }
            }
        }
    });
    // redirect to /projects
    return redirect("/projects");
}
