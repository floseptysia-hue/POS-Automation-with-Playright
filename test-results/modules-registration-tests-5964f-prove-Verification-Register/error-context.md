# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/registration/tests/approve-register.spec.ts >> Approve Verification Register
- Location: src/modules/registration/tests/approve-register.spec.ts:10:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('[data-sentry-element="NumberFormat"]').nth(1)

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - complementary [ref=e3]:
      - link "image GDC Merchant" [ref=e4] [cursor=pointer]:
        - /url: /
        - generic [ref=e5]:
          - generic [ref=e6]:
            - img [ref=e8]
            - img "image" [ref=e9]
          - paragraph: GDC Merchant
      - generic [ref=e10]:
        - generic [ref=e12] [cursor=pointer]:
          - img [ref=e14]
          - generic: Beranda
        - generic [ref=e17] [cursor=pointer]:
          - img [ref=e19]
          - generic: Verifikasi
        - generic [ref=e22] [cursor=pointer]:
          - img [ref=e24]
          - generic: List Outlet
        - generic [ref=e27] [cursor=pointer]:
          - img [ref=e29]
          - generic: List Pedagang
        - generic [ref=e32] [cursor=pointer]:
          - img [ref=e34]
          - generic: Transaksi
        - generic [ref=e37] [cursor=pointer]:
          - img [ref=e39]
          - generic: Referral Management
        - generic [ref=e43] [cursor=pointer]:
          - img [ref=e45]
          - generic: Pengaturan
          - img [ref=e48]
    - banner [ref=e50]:
      - navigation [ref=e51]:
        - img [ref=e54] [cursor=pointer]
        - generic [ref=e58] [cursor=pointer]:
          - generic "admin@getqris.id" [ref=e60]:
            - generic [ref=e62]: A
          - generic [ref=e63]:
            - generic [ref=e64]: Selamat Datang
            - generic [ref=e65]: admin@getqris.id
    - main [ref=e66]:
      - generic [ref=e67]:
        - paragraph [ref=e69]: Verifikasi
        - generic [ref=e70]:
          - generic [ref=e71]:
            - paragraph [ref=e72]: Data Pendaftar
            - generic [ref=e73]:
              - button "Filter" [ref=e74] [cursor=pointer]:
                - paragraph [ref=e75]: Filter
                - img [ref=e76]
              - link "Unduh Semua" [ref=e80] [cursor=pointer]:
                - /url: "#"
                - img [ref=e81]
                - paragraph [ref=e84]: Unduh Semua
              - generic [ref=e85]:
                - img [ref=e87]
                - textbox "Nama Outlet" [ref=e90]
                - button [ref=e91] [cursor=pointer]:
                  - img [ref=e92]
          - table [ref=e95]:
            - rowgroup [ref=e96]:
              - row "Tanggal Registrasi ID Pedagang Kota Nama Outlet Tipe Usaha Jenis Usaha Jenis Cabang Status Lihat Detail" [ref=e97]:
                - columnheader "Tanggal Registrasi" [ref=e98]
                - columnheader "ID" [ref=e99]
                - columnheader "Pedagang" [ref=e100]
                - columnheader "Kota" [ref=e101]
                - columnheader "Nama Outlet" [ref=e102]
                - columnheader "Tipe Usaha" [ref=e103]
                - columnheader "Jenis Usaha" [ref=e104]
                - columnheader "Jenis Cabang" [ref=e105]
                - columnheader "Status" [ref=e106]
                - columnheader "Lihat Detail" [ref=e107]
            - rowgroup [ref=e108]:
              - row "Tidak ada data yang tersedia di tabel" [ref=e109]:
                - cell "Tidak ada data yang tersedia di tabel" [ref=e110]
          - generic [ref=e111]:
            - generic [ref=e112]:
              - generic [ref=e115] [cursor=pointer]:
                - generic [ref=e116]: "10"
                - img [ref=e117]
              - text: per halaman
            - paragraph [ref=e119]: Menampilkan 0 hingga 0 dari 0 data
            - navigation "Pagination" [ref=e120]:
              - listitem [ref=e121]:
                - button "Previous page" [disabled] [ref=e122]:
                  - img [ref=e123]
              - listitem [ref=e125] [cursor=pointer]:
                - button "Page 1 is your current page" [ref=e126]: "1"
              - listitem [ref=e127]:
                - button "Next page" [disabled] [ref=e128]:
                  - img [ref=e129]
  - alert [ref=e131]
```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export class DashboardPage {
  4  |   constructor(
  5  |     private page: Page
  6  |   ) { }
  7  | 
  8  |   async getActiveOutletCount(): Promise<number> {
  9  |     const value = await this.page
  10 |       .locator('[data-sentry-element="NumberFormat"]')
  11 |       .nth(1)
> 12 |       .textContent();
     |        ^ Error: locator.textContent: Test timeout of 60000ms exceeded.
  13 | 
  14 |     return Number(
  15 |       value?.replace(/\./g, "")
  16 |     );
  17 |   }
  18 | }
```