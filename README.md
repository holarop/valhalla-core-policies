# ⚔️ VALHALLA CORE — Geliştirici Doğrulama ve Politika Sitesi

Bu dizin (`docs/`), Discord Developer Portal üzerinde **VALHALLA CORE** botunun doğrulanması (Verification) için gerekli olan **Hizmet Koşulları (Terms of Service)** ve **Gizlilik Politikası (Privacy Policy)** sayfalarını içeren bağımsız bir statik web sitesi paketidir.

---

## 📁 Paket İçeriği

- **`index.html`**: Gotik Valhalla temalı ana karşılama ve belge seçim merkezi.
- **`terms.html`**: Türkçe ve İngilizce tam Hizmet Koşulları belgesi (anlık dil değiştirici ile).
- **`privacy.html`**: Türkçe ve İngilizce tam Gizlilik Politikası belgesi (kod tabanındaki gerçek veri ve 30 günlük transkript saklama süresiyle birebir uyumlu).
- **`style.css`**: Gotik siyah-koyu kırmızı (`#8B0000`), modern, mobil ve masaüstü uyumlu stil dosyası.
- **`lang.js`**: Sayfa yenilemeden tek tıkla Türkçe / İngilizce geçişi sağlayan ve tercihi saklayan hafif JavaScript motoru.

---

## 🚀 GitHub Pages Üzerinden Ücretsiz Yayınlama Adımları (2 Dakika)

### Yöntem A: Mevcut GitHub Deposu Üzerinden Yayınlama (En Hızlı)

1. Projenizi GitHub'a push ettikten sonra deponuzun sayfasına gidin.
2. Üst menüden **Settings** (Ayarlar) sekmesine tıklayın.
3. Sol menüden **Pages** bölümüne girin.
4. **Build and deployment** başlığı altındaki **Source** kısmını:
   - `Deploy from a branch` olarak seçin.
5. **Branch** ayarını:
   - Dal: `main` (veya kullandığınız ana dal)
   - Dizin: `/docs` seçeneğini işaretleyin.
6. **Save** (Kaydet) butonuna basın.
7. Yaklaşık 1 dakika içinde siteniz SSL (HTTPS) güvencesiyle yayına girecektir.

---

### Yöntem B: Bağımsız / Özel Bir GitHub Deposu Açarak Yayınlama

1. GitHub hesabınızda (veya `holarop` organizasyonunda) yeni bir **Public** (Herkese Açık) repo oluşturun (Örn: `valhalla-legal`).
2. Bu `docs/` klasörünün içindeki dosyaları o repoya yükleyin.
3. Reponun **Settings -> Pages** kısmından `Branch: main`, `Folder: / (root)` seçerek kaydedin.
4. Siteniz şu adreste ücretsiz olarak aktif olacaktır:
   `https://<kullanici-adi>.github.io/valhalla-legal/`

---

## 🌐 Discord Developer Portal'a Girilecek Bağlantılar

GitHub Pages siteniz aktif olduğunda, [Discord Developer Portal](https://discord.com/developers/applications) adresine gidin:

1. **VALHALLA CORE** uygulamanızı seçin (`Application ID: 1571612804824174662`).
2. **General Information** sekmesine gelin.
3. İlgili alanlara bağlantılarınızı yapıştırın:
   - **TERMS OF SERVICE URL:**  
     `https://<kullanici-veya-ekip-adi>.github.io/<repo-adi>/terms.html`
   - **PRIVACY POLICY URL:**  
     `https://<kullanici-veya-ekip-adi>.github.io/<repo-adi>/privacy.html`
4. Sayfanın altındaki yeşil **Save Changes** butonuna basın.

---

## 🔒 Güvenlik Notu

Bu statik site paketi yalnızca halka açık yasal metinleri içerir. Bot tokeni, veritabanı dosyaları, özel sunucu transkriptleri veya gizli ortam değişkenleri bu pakette kesinlikle yer almaz.
