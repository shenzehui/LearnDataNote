const l=JSON.parse('{"key":"v-13198946","path":"/ssm/mybatis/mybatis-02.html","title":"MyBatis 高级篇","lang":"zh-CN","frontmatter":{"title":"MyBatis 高级篇","shortTitle":null,"category":["Java 企业级开发"],"tag":["MyBatis","ORM框架"],"date":"2022-10-30T00:00:00.000Z","isOriginal":true,"description":"MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以使用简单的 XML 或注解来配置和映射原生信息，将接口和 Java 的 POJOs(Plain Ordinary Java Object,普通的 Java对象)映射成数据库中的记录。","head":[["meta",{"property":"og:url","content":"https://newzone.top/ssm/mybatis/mybatis-02.html"}],["meta",{"property":"og:site_name","content":"IT达摩院"}],["meta",{"property":"og:title","content":"MyBatis 高级篇"}],["meta",{"property":"og:description","content":"MyBatis 是一款优秀的持久层框架，它支持定制化 SQL、存储过程以及高级映射。MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集。MyBatis 可以使用简单的 XML 或注解来配置和映射原生信息，将接口和 Java 的 POJOs(Plain Ordinary Java Object,普通的 Java对象)映射成数据库中的记录。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-11-03T11:20:20.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"MyBatis"}],["meta",{"property":"article:tag","content":"ORM框架"}],["meta",{"property":"article:published_time","content":"2022-10-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T11:20:20.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"分页插件","slug":"分页插件","link":"#分页插件","children":[{"level":3,"title":"添加分页插件的依赖","slug":"添加分页插件的依赖","link":"#添加分页插件的依赖","children":[]},{"level":3,"title":"配置插件","slug":"配置插件","link":"#配置插件","children":[]},{"level":3,"title":"分页实例","slug":"分页实例","link":"#分页实例","children":[]}]},{"level":2,"title":"关联映射","slug":"关联映射","link":"#关联映射","children":[{"level":3,"title":"实体关系","slug":"实体关系","link":"#实体关系","children":[]},{"level":3,"title":"创建项目，部署 MyBatis 框架","slug":"创建项目-部署-mybatis-框架","link":"#创建项目-部署-mybatis-框架","children":[]},{"level":3,"title":"一对一关联","slug":"一对一关联","link":"#一对一关联","children":[]},{"level":3,"title":"一对多关联","slug":"一对多关联","link":"#一对多关联","children":[]},{"level":3,"title":"多对一关联","slug":"多对一关联","link":"#多对一关联","children":[]},{"level":3,"title":"多对多关联","slug":"多对多关联","link":"#多对多关联","children":[]}]},{"level":2,"title":"动态 SQL","slug":"动态-sql","link":"#动态-sql","children":[{"level":3,"title":"什么是动态 SQL ？","slug":"什么是动态-sql","link":"#什么是动态-sql","children":[]},{"level":3,"title":"动态 SQL 使用案例","slug":"动态-sql-使用案例","link":"#动态-sql-使用案例","children":[]},{"level":3,"title":"if 标签","slug":"if-标签","link":"#if-标签","children":[]},{"level":3,"title":"where 标签","slug":"where-标签","link":"#where-标签","children":[]},{"level":3,"title":"trim 标签","slug":"trim-标签","link":"#trim-标签","children":[]},{"level":3,"title":"foreach 标签","slug":"foreach-标签","link":"#foreach-标签","children":[]}]},{"level":2,"title":"模糊查询","slug":"模糊查询","link":"#模糊查询","children":[{"level":3,"title":"模糊查询实现","slug":"模糊查询实现","link":"#模糊查询实现","children":[]},{"level":3,"title":"#{}和${}的区别","slug":"和-的区别","link":"#和-的区别","children":[]}]},{"level":2,"title":"MyBatis 日志配置","slug":"mybatis-日志配置","link":"#mybatis-日志配置","children":[{"level":3,"title":"添加日志框架依赖","slug":"添加日志框架依赖","link":"#添加日志框架依赖","children":[]},{"level":3,"title":"添加日志配置文件","slug":"添加日志配置文件","link":"#添加日志配置文件","children":[]},{"level":3,"title":"日志信息的级别","slug":"日志信息的级别","link":"#日志信息的级别","children":[]}]},{"level":2,"title":"配置数据库连接池—整合 Druid","slug":"配置数据库连接池—整合-druid","link":"#配置数据库连接池—整合-druid","children":[{"level":3,"title":"常见的连接池","slug":"常见的连接池","link":"#常见的连接池","children":[]},{"level":3,"title":"添加Druid依赖","slug":"添加druid依赖","link":"#添加druid依赖","children":[]},{"level":3,"title":"创建 Druid 连接池工厂","slug":"创建-druid-连接池工厂","link":"#创建-druid-连接池工厂","children":[]},{"level":3,"title":"将 DruidDataSourceFactory 配置给 MyBatis 数据源","slug":"将-druiddatasourcefactory-配置给-mybatis-数据源","link":"#将-druiddatasourcefactory-配置给-mybatis-数据源","children":[]}]},{"level":2,"title":"MyBatis 缓存","slug":"mybatis-缓存","link":"#mybatis-缓存","children":[{"level":3,"title":"缓存的工作原理","slug":"缓存的工作原理","link":"#缓存的工作原理","children":[]},{"level":3,"title":"MyBatis 缓存","slug":"mybatis-缓存-1","link":"#mybatis-缓存-1","children":[]},{"level":3,"title":"查询操作的缓存开关","slug":"查询操作的缓存开关","link":"#查询操作的缓存开关","children":[]},{"level":3,"title":"更新操作刷新缓存","slug":"更新操作刷新缓存","link":"#更新操作刷新缓存","children":[]}]},{"level":2,"title":"延迟加载","slug":"延迟加载","link":"#延迟加载","children":[]}],"git":{"createdTime":1667474420000,"updatedTime":1667474420000,"contributors":[{"name":"Marico","email":"3032388097@qq.com","commits":1}]},"readingTime":{"minutes":14.68,"words":4403},"filePathRelative":"ssm/mybatis/mybatis-02.md","localizedDate":"2022年10月30日"}');export{l as data};
