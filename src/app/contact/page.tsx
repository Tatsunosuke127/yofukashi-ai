"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const categories = ["案件依頼", "コラボ", "その他"];

// Web3Forms アクセスキー
// https://web3forms.com でメールアドレスを入力するとキーが届く
// そのキーをここに貼り付ける
const WEB3FORMS_KEY = "7fbf1b65-c6cd-49c4-8e9d-6026a314a7d4";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "【夜ふかしAI】お問い合わせがありました");
    data.append("from_name", "夜ふかしAI お問い合わせフォーム");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="pt-24 pb-section-sp md:pb-section px-6">
        <div className="max-w-lg mx-auto text-center">
          <FadeIn>
            <p className="font-mincho text-2xl mb-4">ありがとう。</p>
            <p className="text-sm text-subtext">
              内容を確認して、ご連絡しますね。
            </p>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-section-sp md:pb-section px-6">
      <div className="max-w-lg mx-auto">
        <FadeIn>
          <p className="font-accent italic text-sm text-subtext tracking-widest mb-4">
            contact
          </p>
          <h1 className="font-mincho text-2xl md:text-3xl mb-3">
            お問い合わせ
          </h1>
          <p className="text-sm text-subtext mb-10">
            案件・コラボのご相談、こちらからどうぞ。
          </p>
        </FadeIn>

        <FadeIn>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="botcheck" className="hidden" />

            <div>
              <label className="block text-xs text-subtext mb-2">
                お名前 <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-card border border-border rounded-card px-4 py-3 text-sm text-text placeholder:text-subtext/50 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label className="block text-xs text-subtext mb-2">
                会社名（任意）
              </label>
              <input
                type="text"
                name="company"
                className="w-full bg-card border border-border rounded-card px-4 py-3 text-sm text-text placeholder:text-subtext/50 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="株式会社〇〇"
              />
            </div>

            <div>
              <label className="block text-xs text-subtext mb-2">
                メールアドレス <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-card border border-border rounded-card px-4 py-3 text-sm text-text placeholder:text-subtext/50 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-xs text-subtext mb-2">
                種別 <span className="text-accent">*</span>
              </label>
              <select
                name="category"
                required
                className="w-full bg-card border border-border rounded-card px-4 py-3 text-sm text-text focus:outline-none focus:border-accent/50 transition-colors"
              >
                <option value="" className="text-subtext">
                  選択してください
                </option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-subtext mb-2">
                本文 <span className="text-accent">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full bg-card border border-border rounded-card px-4 py-3 text-sm text-text placeholder:text-subtext/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">
                送信に失敗しました。もう一度お試しください。
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full border border-text/20 text-text text-sm px-6 py-3 rounded-full hover:border-accent hover:text-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "送信中..." : "送信する"}
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
