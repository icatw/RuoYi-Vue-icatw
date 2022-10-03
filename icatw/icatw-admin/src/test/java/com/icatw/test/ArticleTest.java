package com.icatw.test;

import com.icatw.blog.domain.Article;
import com.icatw.blog.service.IArticleService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

/**
 * @author icatw
 * @date 2022/9/13
 * @email 762188827@qq.com
 * @apiNote
 */
@SpringBootTest
public class ArticleTest {

    @Autowired
    IArticleService articleMapper;

    @Test
    void  testArticleVo(){
        List<Article> articles = articleMapper.selectArticleListVo(null);
        System.out.println(articles);
    }
}
