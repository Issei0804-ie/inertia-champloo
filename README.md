## 環境構築方法

```bash
$ cp .env.example .env 
$ composer install --ignore-platform-reqs
$ ./vendor/bin/sail up -d
$ ./vendor/bin/sail php artisan key:generate
$ ./vendor/bin/sail php artisan storage:link
$ ./vendor/bin/sail npm install && ./vendor/bin/sail npm run dev
```

エンドポイント一覧

- http://localhost/champloo
  - Vue3, React, Svelteのチャンプルーエンドポイント
- http://localhost/vue3
  - Vue3のエンドポイント
- http://localhost/react
  - Reactのエンドポイント
- http://localhost/svelte
  - Svelteのエンドポイント
