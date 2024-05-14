#include <stdio.h>
#include <ncurses.h>
#include <stdlib.h>

int main() {
    initscr();              // Inicia o modo ncurses
    cbreak();               // Desabilita o buffering da linha
    noecho();               // Desabilita a exibição automática de caracteres digitados
    keypad(stdscr, TRUE);   // Habilita a captura de teclas especiais como setas

    printw("Pressione a tecla de seta para cima para encerrar o programa.\n");
    refresh();

    int ch;
    while ((ch = getch()) != KEY_UP) {
        // Aguarda a tecla de seta para cima
    }

    endwin();  // Encerra o modo ncurses
    printf("Programa encerrado.\n");
    return 0;
}
