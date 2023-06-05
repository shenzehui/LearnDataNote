import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,b as r,e as i}from"./app-4fbdbfa5.js";const o={},d=i('<p align="center"><a href="https://spring.io/projects/spring-boot"><img src="https://img.shields.io/badge/博客-Java达摩院-brightgreen.svg?style=for-the-badge"></a><a href="https://spring.io/projects/spring-security"><img src="https://img.shields.io/badge/公众号-Encho-green.svg?style=for-the-badge"></a><a href="https://spring.io/" target="_blank"><img src="https://img.shields.io/badge/关于我-about-critical?style=for-the-badge"></a></p>',1),n=i('<ol><li>了解微服务的由来以及基本原理</li><li>学会 Spring Cloud 中各个组件的使用</li><li>了解 Spring Cloud 中核心组件的运行原理</li><li>掌握通过 Spring Cloud 搭建微服务架构</li><li>掌握辅助组件的用法</li></ol><h2 id="spring-cloud-简介" tabindex="-1"><a class="header-anchor" href="#spring-cloud-简介" aria-hidden="true">#</a> Spring Cloud 简介</h2><h3 id="什么是微服务" tabindex="-1"><a class="header-anchor" href="#什么是微服务" aria-hidden="true">#</a> 什么是微服务</h3><blockquote><p>Spring Cloud 是一个基于 Spring Boot 实现的微服务架构开发工具，它为微服务架构中涉及的配置管理、服务治理、断路器、智能路由、微代理、控制总线、全局锁、决策竞选、分布式会话和集群状态管理等操作提供了一种简单的开发方式。</p></blockquote><h3 id="核心特性" tabindex="-1"><a class="header-anchor" href="#核心特性" aria-hidden="true">#</a> 核心特性</h3><ol><li>服务注册与发现</li><li>负载均衡</li><li>服务之间调用</li><li>容错、服务降级、断路器</li><li>消息总线</li><li>分布式配置中心</li><li>链路器</li></ol><h3 id="spring-cloud-包含的组件" tabindex="-1"><a class="header-anchor" href="#spring-cloud-包含的组件" aria-hidden="true">#</a> Spring Cloud 包含的组件</h3><ul><li>Spring Cloud Netflix：这个组件，在 Spring Cloud 成立之初，立下了汗马功劳，但是，2018年的断更，也是Netfilx 掉链子了</li><li>Spring Cloud Config：分布式配置中心，利用 <code>Git</code>/Svn 来集中管理项目的配置文件</li><li>Spring Cloud Bus：消息总线，可以构建消息驱动的微服务，也可以用来做一些状态管理</li><li>Spring Cloud Consul:：服务注册发现</li><li>Spring Cloud Stream：基于 Redis、RabbitMQ、Kafka 实现的消息微服务</li><li>Spring Cloud OpenFeign：提供 OpenFeign 集成到 Spring Boot 应用中的方式，主要解决微服务之间的调用问题</li><li>Spring Cloud Gateway：Spring Cloud 官方推出的网关服务</li><li>Spring Cloud Cloudfoundry：利用 Cloudfoundry 集成我们的应用程序</li><li>Spring Cloud Security：在 Zuul 代理中为 OAuth2 客户端认证提供支持</li><li>Spring Cloud AWS ：快速集成亚马逊云服务</li><li>Spring Cloud Contract：一个消费者驱动，面向 Java 的契约框架</li><li>Spring Cloud Zookeeper：基于 Apache Zookeeper 的服务注册发现</li><li>Spring Cloud Data Flow：在一个结构化的平台上，组成数据微服务</li><li>Spring Cloud Kubernetes：Spring Cloud 提供的针对 Kubernetes 的支持</li><li>Spring Cloud Function</li><li>Spring Cloud Task：短生命周期的微服务</li></ul><h3 id="spring-cloud-和-spring-boot-版本关系" tabindex="-1"><a class="header-anchor" href="#spring-cloud-和-spring-boot-版本关系" aria-hidden="true">#</a> Spring Cloud 和 Spring Boot 版本关系</h3><p><img src="https://s1.vika.cn/space/2022/11/21/0d76c82fed2a4aa5a304ea08667b8e4b" alt="" loading="lazy"></p><h2 id="微服务架构" tabindex="-1"><a class="header-anchor" href="#微服务架构" aria-hidden="true">#</a> 微服务架构</h2><blockquote><p>微服务架构，是一种架构概念，就是将一个单体应用中的每个功能分解到各个离散的服务中以实现对单体应用的解耦</p></blockquote><h3 id="从单体到微服务" tabindex="-1"><a class="header-anchor" href="#从单体到微服务" aria-hidden="true">#</a> 从单体到微服务</h3><p><img src="https://javablog-image.oss-cn-hangzhou.aliyuncs.com/blog/image-20230605214752118.png" alt="image-20230605214752118" loading="lazy"></p><h3 id="主流的微服务架构框架" tabindex="-1"><a class="header-anchor" href="#主流的微服务架构框架" aria-hidden="true">#</a> 主流的微服务架构框架</h3><ul><li>Dubbo（阿里、开源apache）：2012年推出、2014年停更、2015年底又继续更新</li><li>Dubbox（当当网基于Dubbo的更新）</li><li>jd-hydra（京东基于Dubbo的更新）</li><li><code>SpringCloud Netfilx</code>（2016年）/<code>SpringCloud Alibaba</code></li><li>ServicComb（CSE）华为 2017年</li></ul><h3 id="微服务架构优点" tabindex="-1"><a class="header-anchor" href="#微服务架构优点" aria-hidden="true">#</a> 微服务架构优点</h3><ul><li>解决了单体项目的复杂性问题</li><li>每个服务都可以由单独的团队进行开发</li><li>每个服务都可以使用单独的技术栈进行开发</li><li>每个服务都是独立的进行部署的</li><li>每个服务都可以独立的进行部署和维护</li><li>每个服务都可以进行扩展</li></ul><h3 id="微服务架构的缺点" tabindex="-1"><a class="header-anchor" href="#微服务架构的缺点" aria-hidden="true">#</a> 微服务架构的缺点</h3><ul><li>微服务架构的本身就是一个缺点，如何把握&quot;微&quot;的力度;</li><li>微服务架构是一个分布式系统，虽然单个服务变得简单了，但是服务之间存在的相互调用，整个微服务架构的系统变得复杂了;</li><li>微服务架构需要依赖分布式数据库架构;</li><li>微服务的单元测试及调用变得比单体更为复杂;</li><li>部署基于微服务架构的应用程序变得非常复杂;</li><li>进行微服务架构的应用程序开发的技术成本变得更高;</li></ul><h2 id="微服务架构开发需要解决的问题" tabindex="-1"><a class="header-anchor" href="#微服务架构开发需要解决的问题" aria-hidden="true">#</a> 微服务架构开发需要解决的问题</h2><blockquote><p>在微服务架构开发的系统中必然存在很多个服务，服务之间需要相互感知对方的存在，需要进行服务间的调用，该如何实现呢?——进行微服务架构开发需要解决的问题：</p><ol><li>如此多的服务，服务之间如何相互发现?</li><li>服务与服务之间该如何通信?</li><li>如果某个服务挂了，该如何处理?</li><li>前端访问多个不同的服务时该如何统一访问路径呢?</li></ol></blockquote><h3 id="服务之间如何相互发现" tabindex="-1"><a class="header-anchor" href="#服务之间如何相互发现" aria-hidden="true">#</a> 服务之间如何相互发现?</h3><blockquote><p>微服务架构——每个服务只处理一件事情/一个步骤，在一个复杂的业务中必然会存在服务间的相互调用，服务想要相互调用就需要先发现对方。</p></blockquote><p><strong>通过服务注册与发现中心实现服务间的相互发现</strong></p><p><img src="https://javablog-image.oss-cn-hangzhou.aliyuncs.com/blog/image-20230605215104128.png" alt="image-20230605215104128" loading="lazy"></p><ul><li>服务注册与发现中心也是一台服务器</li><li>服务提供者在服务注册与发现中心进行注册</li><li>服务注册与发现中心进行服务记录，并与服务提供者保持心跳</li><li>服务消费通过服务注册与发现中心进行服务查询（服务发现）</li><li>服务注册与发现中心返回可用的服务的服务器地址列表</li><li>服务消费者通过负载均衡访问服务提供者</li></ul><h3 id="服务之间如何进行通信" tabindex="-1"><a class="header-anchor" href="#服务之间如何进行通信" aria-hidden="true">#</a> 服务之间如何进行通信?</h3><blockquote><p>服务消费者在调用服务提供者时，首先需要通过<code>服务注册与发现中心</code>进行服务查询，返回服务列表给服务消费者，<code>服务消费者</code>通过 LoadBalance 调用<code>服务提供者</code>，那么他们之间是如何通信呢? ——数据传输规则</p><p>服务与服务之间的通信方式有2种：同步调用和异步调用</p></blockquote><h5 id="同步调用" tabindex="-1"><a class="header-anchor" href="#同步调用" aria-hidden="true">#</a> 同步调用</h5><ul><li>REST(SpringCloud Netfilx ，SpringCloud Alibaba) <ul><li>基于HTTP协议的请求和响应</li><li>更容易实现，技术更灵活</li><li>支持多语言、同时可以实现跨客户端</li><li>适用面很广</li></ul></li><li>RPC(Dubbo) <ul><li>基于网络层协议通信</li><li>传输效率高</li><li>安全性更高</li><li>如果有统一的开发规范或者框架，开发效率是比较高的</li></ul></li></ul><h5 id="异步调用" tabindex="-1"><a class="header-anchor" href="#异步调用" aria-hidden="true">#</a> 异步调用</h5><p>服务间的异步通信通常是通过消息队列实现的</p><h3 id="服务挂了该如何解决" tabindex="-1"><a class="header-anchor" href="#服务挂了该如何解决" aria-hidden="true">#</a> 服务挂了该如何解决?</h3><h5 id="服务故障雪崩" tabindex="-1"><a class="header-anchor" href="#服务故障雪崩" aria-hidden="true">#</a> 服务故障雪崩</h5><p><img src="https://javablog-image.oss-cn-hangzhou.aliyuncs.com/blog/image-20230605215217384.png" alt="image-20230605215217384" loading="lazy"></p><h5 id="如何解决服务故障雪崩" tabindex="-1"><a class="header-anchor" href="#如何解决服务故障雪崩" aria-hidden="true">#</a> 如何解决服务故障雪崩</h5><ul><li>服务集群——尽量保证每个服务可用</li><li>服务降级与熔断——避免请求阻塞造成正常的服务出现故障</li></ul><h3 id="客户端如何统一访问多个接口服务" tabindex="-1"><a class="header-anchor" href="#客户端如何统一访问多个接口服务" aria-hidden="true">#</a> 客户端如何统一访问多个接口服务?</h3><p><strong>通过路由网关实现接口的统一访问</strong></p><p><img src="https://javablog-image.oss-cn-hangzhou.aliyuncs.com/blog/image-20230605215409455.png" alt="image-20230605215409455" loading="lazy"></p>',41);function h(t,s){return a(),e("div",null,[d,r(" · ## 目标 "),n])}const g=l(o,[["render",h],["__file","index.html.vue"]]);export{g as default};
