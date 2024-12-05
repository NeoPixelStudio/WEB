<?php include_once 'includes/templates/header.php' ?>

    <section class="seccion contenedor">
        <h2>La mejor conferencia de diseño web en español</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est recusandae in, ex quam quaerat obcaecati accusantium ut autem. Quidem ad dolorem unde saepe fuga provident magnam vitae, impedit assumenda! Minima.
        </p>
    </section>

    <section class="programa">
        <div class="contenedor-video">
            <video autoplay loop poster="img/bg-talleres.jpg">
            <source src="video/video.mp4" type="video/mp4">
            <source src="video/video.webm" type="video/webm">
            <source src="video/video.ogg" type="video/ogg">
            </video>
        </div>
        <!--Contenedor Video-->


        <div class="contenido-programa">
            <div class="contenedor">
                <div class="programa-evento">
                    <h2>Programa del Evento</h2>
                    <nav class="menu-programa">
                        <a href="#talleres"><img class="icon-rs" src="img/icons/code.svg" alt="">Talleres</a>
                        <a href="#conferencias"><img class="icon-rs" src="img/icons/comment.svg" alt="">Conferencias</a>
                        <a href="#seminarios"><img class="icon-rs" src="img/icons/university.svg" alt="">Seminarios</a>
                    </nav>

                    <div id="talleres" class="info-curso ocultar clearfix">
                        <div class="detalle-evento">
                            <h3>HTML 5, CSS3, Javascript</h3>
                            <p><img class="icon-rs" src="img/icons/clock.svg" alt="">16:00 hrs</p>
                            <p><img class="icon-rs" src="img/icons/calendar.svg" alt="">10 Dic</p>
                            <p><img class="icon-rs" src="img/icons/user.svg" alt="">Pablo Verde</p>
                        </div>
                        <div class="detalle-evento">
                            <h3>Responsive Web Design</h3>
                            <p><img class="icon-rs" src="img/icons/clock.svg" alt="">20:00 hrs</p>
                            <p><img class="icon-rs" src="img/icons/calendar.svg" alt="">10 Dic</p>
                            <p><img class="icon-rs" src="img/icons/user.svg" alt="">Raúl Torre</p>
                            <a href="#" class="button float-right">Ver Todos</a>
                        </div>
                    </div><!--Talleres-->

                    <div id="conferencias" class="info-curso ocultar clearfix">
                        <div class="detalle-evento">
                            <h3>Cómo ser freelancer</h3>
                            <p><img class="icon-rs" src="img/icons/clock.svg" alt="">10:00 hrs</p>
                            <p><img class="icon-rs" src="img/icons/calendar.svg" alt="">10 Dic</p>
                            <p><img class="icon-rs" src="img/icons/user.svg" alt="">Perico os Palotes</p>
                        </div>
                        <div class="detalle-evento">
                            <h3>Tecnologías del futuro</h3>
                            <p><img class="icon-rs" src="img/icons/clock.svg" alt="">17:00 hrs</p>
                            <p><img class="icon-rs" src="img/icons/calendar.svg" alt="">10 Dic</p>
                            <p><img class="icon-rs" src="img/icons/user.svg" alt="">Trempo Racio</p>
                            <a href="#" class="button float-right">Ver Todos</a>
                        </div>
                    </div><!--Conferencias-->

                    <div id="seminarios" class="info-curso ocultar clearfix">
                        <div class="detalle-evento">
                            <h3>Diseño UI/UX</h3>
                            <p><img class="icon-rs" src="img/icons/clock.svg" alt="">12:00 hrs</p>
                            <p><img class="icon-rs" src="img/icons/calendar.svg" alt="">10 Dic</p>
                            <p><img class="icon-rs" src="img/icons/user.svg" alt="">Pato Garcia</p>
                        </div>
                        <div class="detalle-evento">
                            <h3>Aprende a programar en una mañana</h3>
                            <p><img class="icon-rs" src="img/icons/clock.svg" alt="">08:00 hrs</p>
                            <p><img class="icon-rs" src="img/icons/calendar.svg" alt="">10 Dic</p>
                            <p><img class="icon-rs" src="img/icons/user.svg" alt="">Adriana Peréz</p>
                            <a href="#" class="button float-right">Ver Todos</a>
                        </div>
                    </div><!--Seminarios-->

                </div>
            </div>
        </div>
    </section>


    <section class="invitados contenedor seccion">
        <h2>Nuestros Invitados</h2>
        <ul class="lista-invitados">
            <li>
                <div class="invitado">
                    <img src="img/invitado1.jpg" alt="imagen-invitado">
                    <p>Juan Bautista</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado2.jpg" alt="imagen-invitado">
                    <p>Lily Arteaga</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado3.jpg" alt="imagen-invitado">
                    <p>Steve Jhons</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado4.jpg" alt="imagen-invitado">
                    <p>Britany Collar</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado5.jpg" alt="imagen-invitado">
                    <p>Pedro Kross</p>
                </div>
            </li>
            <li>
                <div class="invitado">
                    <img src="img/invitado6.jpg" alt="imagen-invitado">
                    <p>Estefania Brown</p>
                </div>
            </li>
        </ul>
    </section>

    <div class="contador parallax">
        <ul class="resumen-evento columnas4 contenedor">
            <li>
                <p class="numero"></p>Invitados</li>
            <li>
                <p class="numero"></p>Talleres</li>
            <li>
                <p class="numero"></p>Días</li>
            <li>
                <p class="numero"></p>Conferencias</li>
        </ul>
    </div>

    <section class="precios seccion">
        <h2>Precios</h2>
        <div class="contenedor">
            <ul class="lista-precios">
                <li>
                    <div class="tabla-precio">
                        <h3>Pase por día</h3>
                        <p class="numero">$30</p>
                        <ul>
                            <li>Bocadillos</li>
                            <li>Todas las Conferencias</li>
                            <li>Todos los talleres</li>
                        </ul>
                        <a href="#" class="button hollow">Comprar</a>
                    </div>
                </li>

                <li>
                    <div class="tabla-precio">
                        <h3>Todos los días</h3>
                        <p class="numero">$50</p>
                        <ul>
                            <li>Bocadillos</li>
                            <li>Todas las Conferencias</li>
                            <li>Todos los talleres</li>
                        </ul>
                        <a href="#" class="button">Comprar</a>
                    </div>
                </li>

                <li>
                    <div class="tabla-precio">
                        <h3>Pase dos días</h3>
                        <p class="numero">$45</p>
                        <ul>
                            <li>Bocadillos</li>
                            <li>Todas las Conferencias</li>
                            <li>Todos los talleres</li>
                        </ul>
                        <a href="#" class="button hollow">Comprar</a>
                    </div>
                </li>
            </ul>
        </div>
    </section>

    <div id="mapa" class="mapa"></div>

    <section class="seccion">
        <h2>Testimoniales</h2>

        <div class="testimoniales contenedor">
            <div class="testimonial">
                <blockquote>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit suscipit unde vero eaque debitis, ghostre fretto laboriosam magni consequuntur earum error iste neque nihil at costuyen.
                    </p>
                    <div class="info-testimonial">
                        <div class="imagen-testimonio">
                            <img src="img/testimonial1.jpg" alt="imagen-testimonial"></div>
                        <div class="quien-testimonio">
                            <cite>Oswaldo Retro <span>Diseñador en @DesignX</span></cite></div>
                    </div>
                </blockquote>
            </div>

            <div class="testimonial">
                <blockquote>
                    <p>A sit suscipit unde vero eaque debitis, dicta exercitationem voluptatum voluptates rerum totam laboriosam magni consequntur earum error iste neque nihil.
                    </p>
                    <div class="info-testimonial">
                        <div class="imagen-testimonio">
                            <img src="img/testimonial2.jpg" alt="imagen-testimonial"></div>
                        <div class="quien-testimonio">
                            <cite>Carlos Trovo <span>Diseñador en @Pixel</span></cite></div>
                    </div>
                </blockquote>
            </div>

            <div class="testimonial">
                <blockquote>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta exercitationem voluptatum voluptates rerum totam laboriosam magni consequuntur tropestor serto.
                    </p>
                    <div class="info-testimonial">
                        <div class="imagen-testimonio">
                            <img src="img/testimonial3.jpg" alt="imagen-testimonial"></div>
                        <div class="quien-testimonio">
                            <cite>Carol Host <span>Diseñadora en @Alto</span></cite></div>
                    </div>
                </blockquote>
            </div>

        </div>
    </section>

    <div class="newsletter parallax">
        <div class="contenido contenedor">
            <p>Registrate al Newsletter</p>
            <h3>ABCwebcamp</h3>
            <a href=# class="button transparente">Registro</a>
        </div>
    </div>

    <section class="seccion">
        <h2>Faltan</h2>
        <div class="contenedor conteo">
            <ul class="cuenta-regresiva columnas4">
                <li>
                    <p id="dias" class="numero"></p>días</li>
                <li>
                    <p id="horas" class="numero"></p>horas</li>
                <li>
                    <p id="minutos" class="numero"></p>Minutos</li>
                <li>
                    <p id="segundos" class="numero"></p>Segundos</li>
            </ul>
        </div>
    </section>

<?php include_once 'includes/templates/footer.php' ?>