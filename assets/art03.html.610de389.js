const e=JSON.parse('{"key":"v-d1a91ffc","path":"/nicearticle/art03.html","title":"再有人问你如何实现订单到期关闭，就把这篇文章发给他！","lang":"zh-CN","frontmatter":{"title":"再有人问你如何实现订单到期关闭，就把这篇文章发给他！","tag":["杂文"],"category":["好文收集"],"author":"Hollis","description":null,"summary":"\\" 实现订单到期关闭的十一种正确姿势！\\" 在电商、支付等系统中，一般都是先创建订单（支付单），再给用户一定的时间进行支付，如果没有按时支付的话，就需要把之前的订单（支付单）取消掉。 这种类似的场景有很多，还有比如到期自动收货、超时自动退款、下单后自动发送短信等等都是类似的业务问题。 本文就从这样的业务问题出发，探讨一下都有哪些技术方案，这些方案的实现细节，以","head":[["meta",{"property":"og:url","content":"https://newzone.top/nicearticle/art03.html"}],["meta",{"property":"og:site_name","content":"IT达摩院"}],["meta",{"property":"og:title","content":"再有人问你如何实现订单到期关闭，就把这篇文章发给他！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-29T12:21:33.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Hollis"}],["meta",{"property":"article:tag","content":"杂文"}],["meta",{"property":"article:modified_time","content":"2022-11-29T12:21:33.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"一、被动关闭","slug":"一、被动关闭","link":"#一、被动关闭","children":[]},{"level":3,"title":"二、定时任务","slug":"二、定时任务","link":"#二、定时任务","children":[]},{"level":3,"title":"三、JDK自带的延迟队列","slug":"三、jdk自带的延迟队列","link":"#三、jdk自带的延迟队列","children":[]},{"level":3,"title":"四、Netty的时间轮","slug":"四、netty的时间轮","link":"#四、netty的时间轮","children":[]},{"level":3,"title":"五、Kafka的时间轮","slug":"五、kafka的时间轮","link":"#五、kafka的时间轮","children":[]},{"level":3,"title":"六、RocketMQ延迟消息","slug":"六、rocketmq延迟消息","link":"#六、rocketmq延迟消息","children":[]},{"level":3,"title":"七、RabbitMQ死信队列","slug":"七、rabbitmq死信队列","link":"#七、rabbitmq死信队列","children":[]},{"level":3,"title":"八、RabbitMQ插件","slug":"八、rabbitmq插件","link":"#八、rabbitmq插件","children":[]},{"level":3,"title":"九、Redis过期监听","slug":"九、redis过期监听","link":"#九、redis过期监听","children":[]},{"level":3,"title":"十、Redis的zset","slug":"十、redis的zset","link":"#十、redis的zset","children":[]},{"level":3,"title":"十一、Redisson","slug":"十一、redisson","link":"#十一、redisson","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1669724493000,"updatedTime":1669724493000,"contributors":[{"name":"Marico","email":"3032388097@qq.com","commits":1}]},"readingTime":{"minutes":15.64,"words":4691},"filePathRelative":"nicearticle/art03.md","localizedDate":"2022年11月29日"}');export{e as data};
