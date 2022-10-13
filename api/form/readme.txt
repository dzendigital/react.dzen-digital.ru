Структура REST API

Методы:

1) index.php
method: get
url: /api/form/
description: получение информации для отображения на странице

2) create.php
method: get
url: /api/form/create/
description: получение разметки для создания

3) store.php
method: post
url: /api/form/
description: запрос на добавление (создание) нового 

4) show.php
method: get
url: /api/form/{item}
description: запрос на получение информации об определенном {item}

5) edit.php
method: get
url: /api/form/{item}/edit
description: запрос на получение разметки для обновления определенного {item} 

6) update.php
method: put
url: /api/form/{item}
description: запрос на обновление определенного {item} 

7) delete.php
method: delete
url: /api/form/{item}
description: запрос на удаление {item} 