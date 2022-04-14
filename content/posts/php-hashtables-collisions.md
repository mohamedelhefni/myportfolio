---
title: "PHP Hashtables collisions"
description: "About PHP arrays (hash tables) collisions "
tags: [PHP, HashTables]
date: 2021-12-09
---


About PHP arrays (hash tables) collisions 
in PHP arrays if you tried to insert keys that is power of 2 like  
```0 32  64 128 256 ```
 they all will be mapped to the same key and thus the hash will have a linked list. The above example creates exactly this. thus creating hash collisions. Inserting an element into such a key becomes more expensive O(n) and therefore inserting n keys jumps from O(n) to O(n^2).
as an example 
```php

<?php

$time_start = microtime(true); 

$data = array();
for ($key = 0; $key <= 1073709056; $key += 512){
	$data[$key] = 0;
}

$execution_time = (microtime(true) - $time_start);
echo '<b>Total Execution Time:</b> '.$execution_time.' secs';
// <b>Total Execution Time:</b> 8.1943790912628 secs  
```
if we decrement or increment the key by one it there will be a huge difference about 40x faster

```php
<?php

$time_start = microtime(true); 

$data = array();
for ($key = 0; $key <= 1073709056; $key += 513){
	$data[$key] = 0;
}

$execution_time = (microtime(true) - $time_start);
echo '<b>Total Execution Time:</b> '.$execution_time.' secs';
// <b>Total Execution Time:</b> 0.11811590194702 secs 
```


