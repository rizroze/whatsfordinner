import { Resend } from "resend";
import { getAppUrl } from "@/lib/utils";
import { generateEmailUnsubscribeUrl } from "@/lib/unsubscribe";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

function wrapEmail(content: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FFFBF5;font-family:Inter,system-ui,sans-serif;">
  <div style="max-width:520px;margin:0 auto;padding:40px 24px;">
    <!-- Header -->
    <div style="text-align:center;margin-bottom:24px;">
      <p style="margin:0;font-size:13px;font-weight:600;color:#1C1917;">What's For Dinner</p>
    </div>
    ${content}
  </div>
</body>
</html>`;
}

function buildFooter(email: string, isLast: boolean): string {
  const unsubUrl = generateEmailUnsubscribeUrl(email);
  return `
    <div style="text-align:center;margin-top:32px;padding-top:20px;border-top:1px solid #E7E5E4;">
      <p style="margin:0;font-size:11px;color:#D6D3D1;">
        What's For Dinner &middot; whatsfordinner.fit
      </p>
      <p style="margin:6px 0 0;font-size:11px;color:#D6D3D1;">
        ${isLast ? "This is our last email. We won't email again." : "This is the last planned email. No spam."}
      </p>
      <p style="margin:6px 0 0;font-size:11px;">
        <a href="${unsubUrl}" style="color:#D6D3D1;text-decoration:underline;">Unsubscribe</a>
      </p>
    </div>`;
}

export function buildNurtureDay3Email(email: string): { subject: string; html: string } {
  const appUrl = getAppUrl();

  const html = wrapEmail(`
    <!-- Main card -->
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;">
        How did your meals turn out?
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        Hey! You planned 3 days of meals earlier this week. How'd it go?
      </p>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        If you loved it, imagine having <strong style="color:#1C1917;">every single week planned</strong> &mdash; with a full grocery list, recipes, and calorie counts. No thinking required.
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=monthly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Subscribe &mdash; $7.99/mo
        </a>
      </div>
    </div>
    ${buildFooter(email, false)}`);

  return { subject: "How did your meals turn out?", html };
}

export function buildNurtureDay7Email(email: string): { subject: string; html: string } {
  const appUrl = getAppUrl();

  const html = wrapEmail(`
    <!-- Main card -->
    <div style="background:#FFFFFF;border-radius:16px;padding:28px 24px;border:1px solid #E7E5E4;">
      <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#1C1917;line-height:1.3;">
        Your next week is unplanned
      </h1>
      <p style="margin:0 0 16px;font-size:14px;color:#57534E;line-height:1.6;">
        It's been a week since your free plan. Right now, you're back to "what's for dinner?" tonight.
      </p>
      <p style="margin:0 0 20px;font-size:14px;color:#57534E;line-height:1.6;">
        Get a fresh <strong style="color:#1C1917;">7-day plan every Sunday</strong> &mdash; recipes, grocery list, everything. No more deciding.
      </p>
      <div style="text-align:center;">
        <a href="${appUrl}/signup?plan=yearly" style="display:inline-block;background:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 32px;border-radius:9999px;font-weight:700;font-size:15px;">
          Subscribe &mdash; $5/mo yearly ($59.99/yr)
        </a>
        <p style="margin:10px 0 0;font-size:12px;color:#A8A29E;">That's less than a single takeout coffee.</p>
      </div>
    </div>
    ${buildFooter(email, true)}`);

  return { subject: "Your next week is unplanned", html };
}

export async function sendNurtureEmail(
  to: string,
  type: "day3" | "day7"
): Promise<void> {
  const { subject, html } =
    type === "day3" ? buildNurtureDay3Email(to) : buildNurtureDay7Email(to);

  const unsubUrl = generateEmailUnsubscribeUrl(to);

  await getResend().emails.send({
    from: "What's For Dinner <plans@whatsfordinner.fit>",
    to,
    subject,
    html,
    headers: {
      "List-Unsubscribe": `<${unsubUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });
}
