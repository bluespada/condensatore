CREATE TABLE "res_users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "res_users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"picture" varchar
);
--> statement-breakpoint
CREATE TABLE "res_auth" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "res_auth_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"user_id" integer,
	CONSTRAINT "res_auth_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "res_auth" ADD CONSTRAINT "res_auth_user_id_res_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."res_users"("id") ON DELETE no action ON UPDATE no action;