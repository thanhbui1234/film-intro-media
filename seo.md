# SEO Overview — Namham DP

Tổng quan các phần SEO đã triển khai trong project và mục đích cụ thể của từng phần.

---

## 1. Metadata (layout.tsx + từng page)

**File:** `src/app/layout.tsx`, `src/app/*/page.tsx`

| Field | Tác dụng |
|-------|----------|
| `title` (template `%s \| Namham DP`) | Hiển thị trên tab browser + tiêu đề kết quả Google |
| `description` | Đoạn mô tả dưới tiêu đề trên Google (snippet) |
| `keywords` | Gợi ý chủ đề cho search engine (ít weight nhưng vẫn nên có) |
| `metadataBase` | Base URL để resolve tất cả relative path trong metadata |
| `alternates.canonical` | Chỉ định URL chính thức, tránh duplicate content khi có nhiều URL trỏ cùng nội dung |

**Kết quả:** Google hiển thị đúng title + description bạn muốn, không tự cắt ghép.

---

## 2. Open Graph (OG)

**Mục đích:** Kiểm soát preview khi share link lên Facebook, Zalo, LinkedIn, Slack...

| Field | Hiển thị ở đâu |
|-------|----------------|
| `og:title` | Tiêu đề trong card preview |
| `og:description` | Mô tả trong card preview |
| `og:image` (1200x630) | Ảnh thumbnail lớn khi share |
| `og:url` | URL canonical của trang |
| `og:site_name` | Tên website hiển thị nhỏ phía trên title |

**Kết quả:** Link share ra đẹp, có ảnh + mô tả rõ ràng → người dùng click nhiều hơn.

---

## 3. Twitter Card

**Mục đích:** Tương tự OG nhưng dành riêng cho X (Twitter).

- `summary_large_image` → hiển thị ảnh lớn thay vì thumbnail nhỏ
- Fallback từ OG nếu không set riêng

**Kết quả:** Tweet có link hiển thị card ảnh lớn, nổi bật trên timeline.

---

## 4. JSON-LD Structured Data

**File:** `src/components/site/json-ld.tsx`

| Schema | Google hiểu là gì | Rich snippet có thể hiện |
|--------|-------------------|--------------------------|
| `WebSite` | Đây là 1 website hoàn chỉnh | Sitelinks search box (ô tìm kiếm ngay trên SERP) |
| `Organization` | Đây là tổ chức/công ty | Knowledge panel (bảng thông tin bên phải Google) |
| `WebPage` | Trang nội dung thông thường | Breadcrumbs, tên trang |
| `AboutPage` | Trang giới thiệu | Google biết đây là trang "About" chính thức |
| `ContactPage` | Trang liên hệ | Có thể hiện nút Contact trực tiếp trên SERP |

**Kết quả:** Google hiển thị kết quả phong phú hơn (rich snippets) → tăng CTR 20-40% so với kết quả thuần text.

---

## 5. Robots

**File:** `src/app/robots.ts`

```
User-Agent: *
Allow: /
Sitemap: https://namham-dp.com/sitemap.xml
```

- Cho phép tất cả bot crawl toàn bộ site
- Trỏ bot đến sitemap để crawl hiệu quả

**Trong metadata (layout.tsx):**
```
googleBot: max-video-preview: -1, max-image-preview: large, max-snippet: -1
```
→ Cho phép Google hiển thị preview ảnh lớn, video dài, snippet không giới hạn ký tự.

**Kết quả:** Google crawl đầy đủ + hiển thị preview tối đa trên SERP.

---

## 6. Sitemap

**File:** `src/app/sitemap.ts`

Liệt kê tất cả URL của site + metadata:
- `lastModified` — lần cuối cập nhật (Google biết khi nào cần re-crawl)
- `changeFrequency` — tần suất thay đổi (weekly/monthly/yearly)
- `priority` — mức quan trọng tương đối (1.0 = quan trọng nhất)

**Kết quả:** Google phát hiện trang mới nhanh hơn, crawl budget được phân bổ hợp lý.

---

## 7. Server-Side Rendering (RSC)

**Trước:** `media-home.tsx` là client component → HTML trả về gần như rỗng, content render bằng JS.

**Sau:** Server Component → HTML response chứa đầy đủ content.

| So sánh | Client Component | Server Component |
|---------|-----------------|------------------|
| HTML response | Skeleton + JS bundle | Full content |
| Google crawl | Phải chạy JS (chậm, không đảm bảo) | Đọc HTML trực tiếp (nhanh, chắc chắn) |
| FCP (First Contentful Paint) | Chậm (đợi JS load + execute) | Nhanh (HTML có sẵn) |
| JS bundle size | Lớn (toàn bộ component) | Nhỏ (chỉ animation wrapper) |

**Kết quả:** Core Web Vitals tốt hơn (LCP, FCP) → Google ưu tiên xếp hạng cao hơn.

---

## 8. Font Optimization

**Cách dùng:** `next/font/google` (Geist Sans + Geist Mono)

- Font được self-host (download lúc build, serve từ domain mình)
- Không có request đến Google Fonts lúc runtime
- CSS `font-display: swap` tự động → không block render

**Kết quả:** Không layout shift (CLS = 0 cho font), không render-blocking request.

---

## 9. Image Optimization

**Cách dùng:** `next/image` component

- Tự động serve WebP/AVIF (nhỏ hơn 30-50% so với JPEG)
- Lazy loading mặc định (trừ `priority` image)
- `sizes` attribute → browser tải đúng kích thước cần thiết
- Tránh CLS bằng cách reserve space trước khi ảnh load

**Kết quả:** LCP nhanh hơn, bandwidth tiết kiệm, không layout shift.

---

## 10. Navigation với next/link

**File:** `src/components/site/header.tsx`

- Prefetch tự động khi link xuất hiện trong viewport
- Client-side navigation (không full page reload)
- Giữ scroll position, shared layout không re-render

**Kết quả:** UX mượt + Google crawl được tất cả internal links từ HTML (không cần JS).

---

## Tóm tắt tác động

| Phần | Ảnh hưởng chính |
|------|----------------|
| Metadata + Canonical | Kiểm soát cách Google hiển thị kết quả |
| Open Graph + Twitter | Kiểm soát preview khi share trên social |
| JSON-LD | Rich snippets → tăng CTR |
| Robots + Sitemap | Crawl hiệu quả, phát hiện trang mới nhanh |
| SSR (RSC) | Content trong HTML → index chắc chắn + Core Web Vitals tốt |
| Font + Image | Performance metrics (LCP, CLS) → ranking signal |
| next/link | Internal linking tốt + UX mượt |
