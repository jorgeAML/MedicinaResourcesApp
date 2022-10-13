using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.Design;
using System.Security.Policy;

namespace MedicinaResourcesApp.Pages;

public class IndexModelSH6 : PageModel
{
    private readonly ILogger<IndexModelSH6> _logger;
    public string MiMensaje { get; private set; } = "PageModel in C#";
    public string Parrafo1 = "HOla hola ";

    public IndexModelSH6(ILogger<IndexModelSH6> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
        MiMensaje = "Hola este texto cambiarlo 4565";
        Parrafo1;
    }
}