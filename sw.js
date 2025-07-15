/**
 * Service Worker para Pesquisa de Arquétipos
 * Implementa cache para funcionamento offline
 */

const CACHE_NAME = 'arquetipos-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/assets/favicon.ico',
  '/assets/apple-touch-icon.png',
  '/assets/favicon-32x32.png',
  '/assets/favicon-16x16.png',
  '/assets/icon-192x192.png',
  '/assets/icon-512x512.png'
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
  console.log('SW: Instalando Service Worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('SW: Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('SW: Todos os arquivos foram cacheados');
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('SW: Erro ao cachear arquivos:', error);
      })
  );
});

// Ativar Service Worker
self.addEventListener('activate', function(event) {
  console.log('SW: Ativando Service Worker...');
  
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('SW: Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('SW: Service Worker ativado');
      return self.clients.claim();
    })
  );
});

// Interceptar requisições
self.addEventListener('fetch', function(event) {
  // Só intercepta requisições HTTP/HTTPS
  if (event.request.url.startsWith('http')) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Retorna do cache se encontrar
          if (response) {
            console.log('SW: Servindo do cache:', event.request.url);
            return response;
          }
          
          // Senão, busca da rede
          return fetch(event.request).then(function(response) {
            // Verifica se a resposta é válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clona a resposta para cachear
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          });
        })
        .catch(function(error) {
          console.error('SW: Erro na requisição:', error);
          
          // Retorna página offline se disponível
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        })
    );
  }
});

// Mensagens do cliente
self.addEventListener('message', function(event) {
  console.log('SW: Mensagem recebida:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      type: 'VERSION',
      version: CACHE_NAME
    });
  }
});

// Sincronização em background
self.addEventListener('sync', function(event) {
  console.log('SW: Sincronização em background:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Implementar lógica de sincronização aqui
      Promise.resolve()
    );
  }
});

// Notificações Push (se implementado no futuro)
self.addEventListener('push', function(event) {
  console.log('SW: Push recebido:', event);
  
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/assets/icon-192x192.png',
      badge: '/assets/icon-72x72.png',
      vibrate: [100, 50, 100],
      data: data.data,
      actions: [
        {
          action: 'explore',
          title: 'Fazer Teste',
          icon: '/assets/icon-96x96.png'
        },
        {
          action: 'close',
          title: 'Fechar',
          icon: '/assets/icon-96x96.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Clique em notificação
self.addEventListener('notificationclick', function(event) {
  console.log('SW: Clique em notificação:', event);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Compartilhamento (Web Share Target)
self.addEventListener('share', function(event) {
  console.log('SW: Compartilhamento recebido:', event);
  
  event.waitUntil(
    clients.openWindow('/?shared=true')
  );
});

// Atualização de cache periódica
self.addEventListener('periodicsync', function(event) {
  console.log('SW: Sincronização periódica:', event.tag);
  
  if (event.tag === 'update-cache') {
    event.waitUntil(
      updateCache()
    );
  }
});

// Função para atualizar cache
async function updateCache() {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(urlsToCache);
    console.log('SW: Cache atualizado');
  } catch (error) {
    console.error('SW: Erro ao atualizar cache:', error);
  }
}

// Limpeza periódica de cache
setInterval(function() {
  caches.keys().then(function(cacheNames) {
    cacheNames.forEach(function(cacheName) {
      if (cacheName !== CACHE_NAME) {
        caches.delete(cacheName);
      }
    });
  });
}, 24 * 60 * 60 * 1000); // 24 horas

// Log de inicialização
console.log('SW: Service Worker carregado - Versão:', CACHE_NAME);
