package kr.makeet.makeetguide.admin.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Log4j2
@RequestMapping("/admin/")
public class AdminController {
    @GetMapping({"/admin","/"})
    public void exAdmin() {
         /* TODO : admin 링크와 바로 이어지도록 링크 수정 필요함 불편하니까 슬래시(/) 없이도 접근가능하도록 수정할 필요가 있다 */
        log.info("admin");
    }
}
