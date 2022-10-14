using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.Design;
using System.Security.Policy;

namespace MedicinaResourcesApp.Pages;

public class IndexModelSH6 : PageModel
{
    //VARIABLES
    string T2 = "Desarrollo desigual de la economía Guatemalteca";
    string P2A = "Entre otras peculiaridades, la sociedad guatemalteca se caracteriza por lo heterogéneo de la plataforma geográfica-natural sobre la cual asienta su desarrollo. ";
    string P2B = "En el transcurso del tiempo, mientras unas zonas se constituyen en estratégicas, otras son marginales y otras quedan en carácter de reserva o sin ser integradas. ";
    string P2C = "La diversidad de climas provoca condiciones distintas para el cultivo y la producción. ";
    string P2D = "Sin embargo, la variabilidad geográfica-natural no ha sido utilizada estratégicamente para el desarrollo progresivo de la sociedad en su conjunto, sino que en función de intereses de minorías que se alternan el poder. ";
    string P2E = "Las zonas que en el pasado fueron estratégicas son aquellas cuyos productos garantizan la monetización de los grupos ya mencionados, que la usan en la compra de artículos suntuarios y aquellas zonas que reproducen la fuerza de trabajo.";
    string P2F = "Aparte de estas dos zonas estratégicas en la existencia de los grupos dominantes, y como tal, del desarrollo económico, hay otras con un cierto peso por el intercambio regional y en la existencia de economías de subsitencia. ";
    string P2G = "La ciudad se garantizaba en su entorno la existencia de una franja en donde se ubican los pueblos que abastecen de los bienes agrícolas y, las haciendas, para la producción de la panela, ganado y otros artículos; más allá estaban las zonas en donde se producían granos básicos y artículos de acuerdo a la división regional de la producción; desde luego, había una franja de influencia que las ciudades y las oligarquías locales definían para su existencia. ";


    //PAGEMODEL
    private readonly ILogger<IndexModelSH6> _logger;
    public string MiMensaje { get; private set; } = "PageModel in C#";
    public string Parrafo { get; private set; } = "PageModel in C#";
    public string Parrafo2 { get; private set; } = "PageModel in C#";

    public string Titulo2 { get; private set; } = "PageModel in C#";
    public string Parrafo2A { get; private set; } = "PageModel in C#";
    public string Parrafo2B { get; private set; } = "PageModel in C#";
    public string Parrafo2C { get; private set; } = "PageModel in C#";

    public IndexModelSH6(ILogger<IndexModelSH6> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        MiMensaje = "Antropologías, senato, música, JorgeAML Ú";
        Parrafo = "En mi corta estadía en el instituto de Investigaciones históricas, Antropológicas y Arqueológicas a finales del año 1987 se implementó el inicio de un programa que se tituló: El proceso de industrialización en Guatemala de 1871 a 1988, en el cual se seleccionó a estudiantes que presentaban un perfil de excelencia académica en el área de Historia.";
        Parrafo2 = "En tres meses se llevó a cabo un proceso de conscripción documental y bibliográfica";

        Titulo2 = T2;
        Parrafo2A = P2A + P2B + P2C + P2D;
        Parrafo2B = P2E;
        Parrafo2C = P2F + P2G;

    }
}